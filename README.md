# 3300 AI — 세계관 사이트

3300 AI SF 판타지 실사화 영화의 연표, 던전, 길드, 등장인물, 도감, 에피소드를 소개하는 사이트입니다. 내용은 `js/data.js`에서 고칩니다.

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 페이지 뼈대 (섹션 순서) |
| `js/data.js` | **내용 데이터**. 글과 이미지는 여기만 고치면 됩니다 |
| `js/main.js` | 탭, 대진표, 스크롤 효과 등 동작 |
| `css/style.css` | 디자인. 맨 위 `:root`의 색만 바꿔도 분위기가 바뀝니다 |
| `assets/images/` | 이미지 파일 넣는 곳 |

## 내용 바꾸기

1. 이미지를 `assets/images/`에 올립니다. 예: `assets/images/hero1.jpg`
2. `js/data.js`에서 해당 항목의 `image: ""`를 `image: "assets/images/hero1.jpg"`로 바꿉니다.
3. 이름, 설명 같은 글도 `js/data.js`에서 바꿉니다.

## GitHub Pages로 공개하기

1. 저장소 **Settings → Pages**로 이동합니다.
2. **Source**를 `Deploy from a branch`로, 브랜치는 이 사이트가 있는 브랜치, 폴더는 `/ (root)`로 정하고 저장합니다.
3. 1~2분 뒤 `https://muzzy8383-ops.github.io/3300-ai/`에서 확인할 수 있습니다.
