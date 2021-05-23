const { actionTypes } = require('./ActionTypes');


/** NAVIGATION */
const initalStateNav = {  
  nav_fetching: false,
  nav_fetched: false,
  nav_fetch_error: '',
  nav_data: [],
  nav_dataLength: 0,
}

export const reducerMainNav = (state = initalStateNav, action) => {

  switch (action.type) {

    case actionTypes.MAIN_NAV_START_FETCHING:
      return {
        fetching: true,
        nav_data: []
      }
    case actionTypes.MAIN_NAV_FETCHED:
      return {
        nav_data: action.data,
        nav_fetched: true,
        nav_dataLength: action.data.length
      }
    case actionTypes.MAIN_NAV_FETCH_ERROR:
      return {
        nav_fetched: false,
        nav_fetching: false,
        nav_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}

/** MULTIPLE CHOICE QUESTION */
const initialStateMultipleChoice = {
 multiple_choice_fetching: false,
 multiple_choice_fetched: false,
 multiple_choice_fetch_error: '',
 multiple_choice_data: [],
 multiple_choice_dataLength: 0
}

export const reducerMultipleChoice = (state = initialStateMultipleChoice, action) => {
  
  switch(action.type){

    case actionTypes.MULTIPLE_CHOICE_START_FETCHING:
      return {
        multiple_choice_fetching: true,
        multiple_choice_data: []
      }
    case actionTypes.MULTIPLE_CHOICE_FETCHED:
      return {
        multiple_choice_data: action.data,
        multiple_choice_fetched: true,
        multiple_choice_dataLength: action.data.length
      }
    case actionTypes.MULTIPLE_CHOICE_FETCH_ERROR:
      return {
        multiple_choice_fetched: false,
        multiple_choice_fetching: false,
        multiple_choice_fetch_error: action.error
      }
      /** default state */
      default:
        return state;
  }
}


/** ABOUT PAGE */
const initialStateAbout = {
  about_fetching: false,
  about_fetched: false,
  about_fetch_error: '',
  about_data: [],
  about_dataLength: 0
}

export const reducerAboutPage = (state = initialStateAbout, action) => {
  
  switch(action.type){

    case actionTypes.ABOUT_START_FETCHING:
      return {
        fetching: true,
        about_data: []
      }
    case actionTypes.ABOUT_FETCHED:
      return {
        about_data: action.data,
        about_fetched: true,
        about_dataLength: action.data.length
      }
    case actionTypes.ABOUT_FETCH_ERROR:
      return {
        about_fetched: false,
        about_fetching: false,
        about_fetch_error: action.error
      }
       /** default state */
      default:
        return state;
  }
}


/** FOOD MENU PAGE */
const initialStateFoodMenu = {
  food_menu_fetching: false,
  food_menu_fetched: false,
  food_menu_fetch_error: '',
  food_menu_data: [],
  food_menu_dataLength: 0
}

export const reducerFoodMenu = (state = initialStateFoodMenu, action) => {
  
  switch(action.type){

    case actionTypes.FOOD_MENU_START_FETCHING:
      return {
        food_menu_fetching: true,
        food_menu_data: []
      }
    case actionTypes.FOOD_MENU_FETCHED:
      return {
        food_menu_data: action.data,
        food_menu_fetched: true,
        food_menu_dataLength: action.data.length
      }
    case actionTypes.FOOD_MENU_FETCH_ERROR:
      return {
        food_menu_fetched: false,
        food_menu_fetching: false,
        food_menu_fetch_error: action.error
      }
       /** default state */
      default:
        return state;
  }
}



/** FOOD MENU TAXANOMY TERM  */
const initialStateFoodMenuTxnTerm = {
  food_menu_txn_term_fetching: false,
  food_menu_txn_term_fetched: false,
  food_menu_txn_term_fetch_error: '',
  food_menu_txn_term_data: [],
  food_menu_txn_term_dataLength: 0
}

export const reducerFoodMenuTxnTerm = (state = initialStateFoodMenuTxnTerm, action) => {

  switch(action.type){

    case actionTypes.FOOD_MENU_TXN_TERM_START_FETCHING:
      return {
        food_menu_txn_term_fetching: true,
        food_menu_txn_term_data: []
      }
    case actionTypes.FOOD_MENU_TXN_TERM_FETCHED:
      return {
        food_menu_txn_term_data: action.data,
        food_menu_txn_term_fetched: true,
        food_menu_txn_term_dataLength: action.data.length
      }
    case actionTypes.FOOD_MENU_TXN_TERM_FETCH_ERROR:
      return {
        food_menu_txn_term_fetched: false,
        food_menu_txn_term_fetching: false,
        food_menu_txn_term_fetch_error: action.error
      }
       /** default state */
      default:
        return state;
  }
}



/** FOOD MENU BG */
const initialStateFoodMenuBg = {
  food_menu_bg_fetching: false,
  food_menu_bg_fetched: false,
  food_menu_bg_fetch_error: '',
  food_menu_bg_data: [],
  food_menu_bg_dataLength: 0
}

export const reducerFoodMenuBg = (state = initialStateFoodMenuBg, action) => {

  switch(action.type){

    case actionTypes.FOOD_MENU_BG_START_FETCHING:
      return {
        food_menu_bg_fetching: true,
        food_menu_bg_data: []
      }
    case actionTypes.FOOD_MENU_BG_FETCHED:
      return {
        food_menu_bg_data: action.data,
        food_menu_bg_fetched: true,
        food_menu_bg_dataLength: action.data.length
      }
    case actionTypes.FOOD_MENU_BG_FETCH_ERROR:
      return {
        food_menu_bg_fetched: false,
        food_menu_bg_fetching: false,
        food_menu_bg_fetch_error: action.error
      }
       /** default state */
      default:
        return state;
  }
}
