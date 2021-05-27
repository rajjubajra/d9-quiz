import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {baseurl} from '../../config/baseurl'


function MultipleChoice() {

  /** AXIOS POST PROCEDURE 
   * 
   * 1 - QUIZ test data store in to localStorage
   * 2 - Update QUIZ data in localStorage on Change of individual input answer
   * 3 - On Submit post localStorage data in to D9 Database 
   * 
  */

  const data = useSelector(state => state.reducerMultipleChoice.multiple_choice_data);
  const [locData, setLocData] = useState([]);
  
  useEffect(()=>{

    const date = new Date();
    const arr = [];
    //push data into array "arr" into quiz test entry format
    data.length > 0 &&
    data.map(item=>{
      return arr.push(
        { uid: item.uid, 
          uuid: item.uuid, 
          nid: item.nid, 
          ans: item.field_answer, 
          ans_given: "",
          date: date.getTime() })
    })
    /**
     * if localStorage data is empty only store arr data in to localStorage
     * else it will store handleChanged data
     * */
    localStorage.setItem("quiz", JSON.stringify(arr))

  },[data])
  
  //UPDATE QUIZ on localStorage onChange
  const handleChanage = (e) => {
    const ans_given = e.target.value;
    const name = e.target.name;
    //update localStorage
    const quiz = JSON.parse(localStorage.getItem("quiz"));
    quiz.map(item =>{
      if(item.nid === name){
        item.ans_given = ans_given
      }
      return item;
    })
    localStorage.setItem("quiz", JSON.stringify(quiz))
    setLocData(JSON.parse(localStorage.getItem('quiz')));  
  }

  const handleSubmit = () => {

    let node = {
      type: [{
        target_id: 'article',
        target_type: 'node_type',
      }],
      title: [{
        value: data.title,
      }],
      body: [{
        value: data.body,
        format: 'plain_text',
      }],
    };
  

    const url = `${baseurl.URL}/node`;
    axios.post(url,{
      headers: {
        'Content-Type': 'application/hal+json',
        'X-CSRF-Token': `${baseurl.URL}/session/token`
      },
      data: JSON.stringify(node),
    }
    )
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))

    console.log("handle submited");
  }

  console.log(locData);
  localStorage.setItem("locData", JSON.stringify(locData));

  return (
    <div>
      <h1>Mulitple Choice</h1>
      {
        data.length > 0 &&
        data.map(item=>{
          return <div className="p-3" key={item.uuid}> 
            <div dangerouslySetInnerHTML={{__html: item.field_multiple_choice_questions}} />
            
              <div className="flex p-3">
                <div  dangerouslySetInnerHTML={{__html: item.field_option_one}} /> 
                <input className="mt-2 ml-3" 
                type="radio" 
                name={item.nid} 
                value="1" 
                
                onChange={handleChanage}
                />
              </div>
              <div className="flex p-3">
                <div  dangerouslySetInnerHTML={{__html: item.field_option_two}} /> 
                <input className="mt-2 ml-3" 
                type="radio" 
                name={item.nid} 
                value="2" 
                onChange={handleChanage}

                />
              </div>
              <div className="flex p-3">
                <div  dangerouslySetInnerHTML={{__html: item.field_option_three}} /> 
                <input className="mt-2 ml-3" 
                type="radio" 
                name={item.nid} 
                value="3"
                onChange={handleChanage} 
                />
              </div>
              <div className="flex p-3">
                <div  dangerouslySetInnerHTML={{__html: item.field_option_four}} /> 
                <input className="mt-2 ml-3" 
                type="radio" 
                name={item.nid} 
                value="4" 
                onChange={handleChanage}
                />
              </div>
            
          </div>
        })
      }
      <div><div onClick={handleSubmit}>submit</div></div>
    </div>
  )
}

export default MultipleChoice