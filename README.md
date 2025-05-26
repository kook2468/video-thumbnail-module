# 🎬 동영상 썸네일 모듈

게시글 작성 중 사용할 수 있는 **동영상 썸네일 추출 모듈**입니다.  
React + Vite + TypeScript 기반으로 개발되었으며,  
**동영상 첨부 → 썸네일 추출 및 선택 → 게시글 반영**까지의 흐름을 제공합니다.

## 1. 기술 스택

| 범주      | 사용 기술                 | 선정 이유                           |
| --------- | ------------------------- | ----------------------------------- |
| 기본 세팅 | React + Vite + TypeScript | 빠른 개발 환경 구성 및 타입 안정성  |
| 스타일링  | TailwindCSS + clsx        | 빠른 UI 구성 및 반응형 지원         |
| 상태관리  | Zustand                   | 간단하고 확장성 있는 전역 상태 관리 |
| 배포      | Vercel                    | 간편하고 빠른 배포 가능             |

## 2. 브랜치 전략

본 프로젝트는 다음과 같은 브랜치 구조 및 명명 규칙을 따릅니다.

### 기본 브랜치

| 브랜치명  | 설명                       |
| --------- | -------------------------- |
| `main`    | 최종 제출 및 배포용 브랜치 |
| `develop` | 기능 개발 통합 브랜치      |

### 작업 브랜치 규칙 (예정)

| 타입      | 네이밍                    | 설명                                 |
| --------- | ------------------------- | ------------------------------------ |
| 초기 세팅 | `chore/init-project`      | 프로젝트 초기 설정 및 공통 구조 구성 |
| 기능 구현 | `feat/post`               | 게시글 작성 관련 UI 및 흐름 구현     |
| 기능 구현 | `feat/thumbnail`          | 썸네일 추출 기능 구현                |
| 리팩토링  | `refactor/thumbnail-flow` | 썸네일 흐름 리팩토링, 구조 개선 등   |
| 문서 작성 | `docs/usage-guide`        | 모듈 사용 가이드 문서 및 샘플 작성   |
| 배포 설정 | `deploy/vercel-config`    | Vercel 배포 설정 및 환경 구성        |

## 2. 폴더 구조 (예정)

```text
src/
├── features/                  # 도메인 기반 폴더
│   ├── post/                  # 포스트 작성 흐름
│   │   ├── components/        # PostModal, 버튼 등
│   │   ├── hooks/             # usePostModal 등 상태 및 제어 관련 훅
│   │   └── index.ts
│   ├── thumbnail/             # 썸네일 추출 기능
│   │   ├── components/        # 썸네일 모달, 썸네일 리스트/아이템
│   │   ├── hooks/             # useVideoPlayer, useThumbnail 등
│   │   ├── utils/             # captureThumbnail, formatTime 등
│   │   ├── types/             # 썸네일 데이터 타입 정의
│   │   └── index.ts
├── shared/                    # 공통 UI 및 유틸
│   ├── components/            # 공용 UI 컴포넌트
│   │   ├── ui/                # Button, Input 등 원자 단위 UI
│   │   ├── layout/            # Wrapper, Container 등 배치 컴포넌트
│   │   ├── modal/             # Modal, ModalContent 등 모달 구조 전용
│   │   ├── feedback/          # Alert, Toast 등 사용자 피드백
│   │   └── index.ts
│   ├── hooks/                 # 범용 커스텀 훅
│   ├── constants/             # 제한 개수, 에러 메세지 등 상수
│   └── styles/                # 글로벌 스타일 및 Tailwind 확장
├── stores/                    # Zustand 상태 관리 (썸네일, 포스트 등)
├── pages/                     # 진입 포인트 (index.tsx 등)
├── assets/                    # 폰트, 아이콘 등 정적 자원
└── main.tsx                   # 앱 엔트리 파일
```

## 3. 실행 방법

```bash
npm install
npm run dev
```
