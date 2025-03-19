const Reducer = (state,action) => {
  switch(action.type){
    case "LOGIN_SUSSCS" :
    return {
      ...state,
      user : action.payload,
      isLogin : true,
      message: "로그인 성공"
    };
    case "MISS_ID" :
      return{
      ...state,
      isLogin: false,
      message : '아이디 입력 오류'
    };
    case "MISS_PASSWORD":
      return{
        ...state,
        isLogin: false,
        message:'비밀번호 입력 오류'
      };
    case "LOGIN_FAILURE":
      return{
        ...state,
        isLogin: false,
        message : 'ID & PW not accurate',
      };
    case "LOGOUT":
      return{
        ...state,
        isLogin: false,
        message : '로그아웃했습니다.'
      };
    default : 
      return{
      ...state
    };
  }
}
export default Reducer