#!/usr/bin/env python3
"""오디오/영상 파일을 단어 단위 타임스탬프와 함께 텍스트로 받아 적는 도구 (faster-whisper)."""
import argparse
import json
import sys
from pathlib import Path

from faster_whisper import WhisperModel


def fmt(t: float) -> str:
    h, rem = divmod(t, 3600)
    m, s = divmod(rem, 60)
    return f"{int(h):02d}:{int(m):02d}:{s:06.3f}"


def main() -> None:
    p = argparse.ArgumentParser(description="단어별 타임스탬프 받아쓰기")
    p.add_argument("input", help="오디오/영상 파일 경로")
    p.add_argument("-m", "--model", default="small",
                   help="tiny/base/small/medium/large-v3 (기본: small)")
    p.add_argument("-l", "--language", default=None,
                   help="언어 코드 (예: ko, en). 생략하면 자동 감지")
    p.add_argument("-o", "--output", default=None,
                   help="출력 경로 접두사 (기본: 입력 파일명). .txt/.json/.srt 생성")
    p.add_argument("--device", default="auto", help="auto/cpu/cuda")
    args = p.parse_args()

    model = WhisperModel(args.model, device=args.device,
                         compute_type="int8" if args.device == "cpu" else "default")
    segments, info = model.transcribe(
        args.input, language=args.language, word_timestamps=True, vad_filter=True)
    print(f"언어: {info.language} (확률 {info.language_probability:.2f}), "
          f"길이: {fmt(info.duration)}", file=sys.stderr)

    base = Path(args.output) if args.output else Path(args.input).with_suffix("")
    words_out, srt_out, data = [], [], []
    for i, seg in enumerate(segments, 1):
        srt_out.append(f"{i}\n{fmt(seg.start).replace('.', ',')} --> "
                       f"{fmt(seg.end).replace('.', ',')}\n{seg.text.strip()}\n")
        for w in seg.words:
            line = f"[{fmt(w.start)} --> {fmt(w.end)}] {w.word.strip()}"
            words_out.append(line)
            print(line, flush=True)
            data.append({"start": round(w.start, 3), "end": round(w.end, 3),
                         "word": w.word.strip(), "probability": round(w.probability, 3)})

    base.with_suffix(".txt").write_text("\n".join(words_out) + "\n", encoding="utf-8")
    base.with_suffix(".json").write_text(
        json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    base.with_suffix(".srt").write_text("\n".join(srt_out), encoding="utf-8")
    print(f"저장됨: {base}.txt / .json / .srt", file=sys.stderr)


if __name__ == "__main__":
    main()
