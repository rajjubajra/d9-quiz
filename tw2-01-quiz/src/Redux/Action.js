import {actionTypes} from './ActionTypes';
import axios from "axios";
import { baseurl } from '../config/baseurl';


export const actionAll = () => {
 
  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  /**
   * REMOTE SITE
   * Install Module used
   * https://www.drupal.org/project/rest_menu_items
   * 
   * Set Permission : Access GET on Menu items per menu resource
   * Enable : Rest UI : Rest Menu Item to GET 
   * 
   */
  
  /**
   * if npm run on localhost:3000
   * fetch data from local json file.
   */
  /** MAIN NAVIGATION */
  const NavLocal = './data/mainnav.json';
  const NavRemote = `${baseurl.URL}/api/menu_items/main`;
  const NAV = window.location.origin === 'http://localhost:3000' 
                    ? NavLocal
                    : NavRemote;

  /** MULTIPLE CHOICE QUIZ */
  const MultipleChoiceLocal = './data/multipleChoice.json';
  const MultipleChoiceRemote = `${baseurl.URL}/rest/multiple-choice-question`;
  const MultipleChoice = window.location.origin === 'http://localhost:3000' 
                    ? MultipleChoiceLocal
                    : MultipleChoiceRemote;


  /** ABOUT PAGE */
  // const AboutLocal = './data/aboutpage.json';
  // const AboutRemote = `${baseurl.URL}/rest/about`;
  // const ABOUT = window.location.origin === 'http://localhost:3000' 
  //                   ? AboutLocal
  //                   : AboutRemote;
  


  return function (dispatch) {

    /** NAVIGATION */
    dispatch({
      type: actionTypes.MAIN_NAV_START_FETCHING
    })
    const reqNav = axios.get(NAV, headers)
    reqNav.then((res) => {
        //console.log("action",res.data)
        dispatch({
          type: actionTypes.MAIN_NAV_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.MAIN_NAV_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })


    /** MULTIPLE CHOICE QUESTION */
    dispatch({
      type: actionTypes.MULTIPLE_CHOICE_START_FETCHING
    })
    const reqMUL_CHO = axios.get(MultipleChoice, headers)
    reqMUL_CHO.then((res) => {
        //console.log("action",res.data)
        dispatch({
          type: actionTypes.MULTIPLE_CHOICE_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.MULTIPLE_CHOICE_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })


    // /** ABOUT PAGE */
    // dispatch({
    //   type: actionTypes.ABOUT_START_FETCHING
    // })
    // const reqAbout = axios.get(ABOUT, headers)
    // reqAbout.then((res) => {
    //    // console.log("action",res.data)
    //     dispatch({
    //       type: actionTypes.ABOUT_FETCHED,
    //       data: res.data
    //     })
    //   })
    //   .catch(err => {
    //     dispatch({
    //       type: actionTypes.ABOUT_FETCH_ERROR,
    //       fetched: false,
    //       error: err
    //     })
    //   })

    





  }
}