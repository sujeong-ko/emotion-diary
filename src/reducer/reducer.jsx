const reducer = (state, action) => {
  let newState = []; // 리턴할 새로운 아이템 상태
  switch (action.type) {
    case "INIT": {
      return action.data;
    } // type이 init이면 액션으로 받은 데이터 그대로 반환
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    } // CREATE면 newItem에 데이터 담고 원래 일기 리스트에 new Item 추가해서 newState에 할당
    case "REMOVE": {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    } // REMOVE면 원래 일기에서 id가 같은 아이템 찾아서 그거만 뺀 새로운 배열을 newState에 할당
    case "EDIT": {
      newState = state.map((item) =>
        item.id === action.data.id ? { ...action.data } : item
      );
      break;
    } // EDIT이면 원래 일기에서 id가 같은 아이템이면 새로 받은 data로 대체하고, id가 다르다면 원래 item으로 놔두기
    // 왜 data.id 인거지 targetId가 아니라..
    default:
      return state;
  }
  return newState;
};

export default reducer;
