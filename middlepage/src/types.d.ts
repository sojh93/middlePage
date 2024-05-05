interface ImportMetaEnv {
    readonly BASE_URL: string;
    // 여기에 추가 환경 변수를 선언할 수 있습니다.
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }