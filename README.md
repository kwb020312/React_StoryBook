# React_StoryBook

해당 Repository는 <a href="https://storybook.js.org/docs/react/get-started/introduction">StoryBook</a> Official Documentation을 보고 제작되었음을 밝힙니다.

StoryBook은 UI환경에서 개발자에게 도움을 주는 다양한 기능을 지원하며 주요 기능은 데이터베이스로 데이터를 편하게 이전시켜 테스트하거나 구성요소를 문서화하여 시각적인 테스트가 가능를 가능하게 하는 것이다.

<img src="gitImages\StoryBook_UI.gif">

실제로 공식 홈페이지에서도 StoryBook을 다음과 같이 소개하는데,

<blockquote cite="https://storybook.js.org/docs/react/get-started/introduction"><i>Storybook은 재사용을 위해 구성 요소를 문서화 하고 자동 으로 구성 요소를 시각적으로 <strong>테스트</strong> 하여 <strong>버그를 방지</strong> 하도록 도와줍니다</i></blockquote>

이러한 편의성을 높여주는 라이브러리 이므로 바로 알아보도록 하자.

## 설치방법

```npx
npx sb init
```

```yarn
yarn storybook
```

위 명령들을 실행한다면 6006번 포트로 적용된 StoryBook UI가 실행된다

<img src="gitImages\Start_StoryBook.jpg">

## 편집

기본적인 화면에선 여러 장점이 나오는데, 기본적으로 Hot Reload가 지원되므로 저장 시 즉시 화면이 리렌더링 된다.

다양한 상태를 UI를 통하여 관리하고 변경/수정 하여 웹애플리케이션의 테스트가 용이하다.

StoryBook의 기본 구조는 컴포넌트를 불러 온 stories.js에서 관리하는데,

```javascript
//Test.stories.jsx
import React from "react";
import OtherComponent from "./OtherComponent.jsx";

export default {
  title: "Test",
  component: OtherComponent,
};

const Template = (args) => <OtherComponent {...args} />;

export const SubTitle = Template.bind({});

SubTitle.args = {
  title: "test",
  label: "testLabel",
};
```

위의 구조를 갖는다.

<img src="gitImages\Create_Test.jpg">

출력된 리스트는 위와같음
