// types of action
const Types = {
  REGISTER: "REGISTER",
  LOGIN: "LOGIN",
  CREATE_MEETING: "CREATE_MEETING",
  END_MEETING: "END_MEETING",
  HAND_RAISE: "HAND_RAISE",
  CHECK_HRAISE_STATUS: "CHECK_HRAISE_STATUS",
  GET_HRAISE_UPDATE: "GET_HRAISE_UPDATE",
  PERMIT_HRAISE: "PERMIT_HRAISE",
  NULLIFY_HRAISE: "NULLIFY_HRAISE"
};
// actions
const register = (id1) => ({
  type: Types.REGISTER,
  payload: id1,
});

const login = (id2) => ({
  type: Types.LOGIN,
  payload: id2,
});

const createMeeting = (id3) => ({
  type: Types.CREATE_MEETING,
  payload: id3,
});

const endMeeting = (id4) => ({
  type: Types.END_MEETING,
  payload: id4,
});

const createMeeting = (id5) => ({
  type: Types.CREATE_MEETING,
  payload: id5,
});

const handRaise = (id6) => ({
  type: Types.HAND_RAISE,
  payload: id6,
});

const checkHraise = (id7) => ({
  type: Types.CHECK_HRAISE_STATUS,
  payload: id7,
});

const getHraise = (id8) => ({
  type: Types.GET_HRAISE_UPDATE,
  payload: id8,
});

const permitHraise = (id9) => ({
  type: Types.PERMIT_HRAISE,
  payload: id9,
});

const nullifyhraisepermit = (id10) => ({
  type: Types.NULLIFY_HRAISE,
  payload: id10,
})

export default {
  register,
  login,
  createMeeting,
  endMeeting,
  handRaise,
  checkHraise,
  getHraise,
  permitHraise,
  nullifyhraisepermit,
  Types,
};
