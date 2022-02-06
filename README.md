<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

# 미션 키워드

- Component
- Props
- Controlled & Uncontrolled Components
- Storybook
- Hooks API
- Context API

# Step1 - Component-Driven Development

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

✔️ `모바일 타겟`의 웹 앱을 구현하며 사용하기 `편리한 모바일 UI/UX`에 대해 고민해봅니다. ✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.
✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다. ✔️ `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.
✔️ [Github Repository](https://github.com/next-step/react-payments)

# Step2 - Controlled & Uncontrolled Components + Context API

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

✔️ `모바일 타겟`의 웹 앱을 구현하며 사용하기 `편리한 모바일 UI/UX`에 대해 고민해봅니다. ✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다. ✔️
React `Context API`를 활용합니다. ✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다. ✔️ `Controlled` & `Uncontrolled Components`에
입각하여 `Form`을 핸들링합니다. ✔️ [Github Repository](https://github.com/next-step/react-payments)

## 📝 Requirements

### 필수 요구사항

- [ ] `Storybook` 상호 작용 테스트
- [ ] `Controlled` & `Uncontrolled Components`에 입각하여 `Form` 핸들링
- [ ] `Context API`를 활용해 전역 상태 관리 및 계층 재구성

#### 카드 추가 확인

- [ ] 이전 폼에서 입력된 카드를 보여준다.
- [ ] 카드 별칭을 입력할 수 있다.
    - [ ] placeholder는 `카드 별칭 (선택)`이다.
    - [ ] 빈 입력값인 경우, 카드사 이름이 별칭으로 저장된다.
    - [ ] 최대 길이는 10자리이다.
- [ ] 확인 버튼을 누르면, 카드 목록 페이지로 이동한다.

#### 카드 목록

- [ ] 카드 목록을 조회할 수 있다.
- [ ] 카드 목록은 최신순(내림차순)으로 정렬된다.
- [ ] 목록 최상단에 `+`을 누르면 카드 추가 페이지로 이동한다.
- [ ] 카드를 클릭하면, 카드 별칭 수정(카드 추가 완료 페이지)로 이동한다.
- [ ] 카드를 삭제할 수 있다.

### 선택 요구사항

- [ ] `Storybook` 스냅샷 테스트
- [ ] 비동기 통신
    - [ ] 다양한 도구를 활용 (예 JSON Server, Strapi 등등)
    - [ ] 등록된 카드 정보를 CRUD 합니다.
- [ ] 나열된 카드 클릭시 `카드 추가 확인` 화면 재활용
    - [ ] 별칭 수정 가능
