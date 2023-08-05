import { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'


function EditGame() {
    const{search} = useLocation()
    const [params] = useSearchParams(search)
    const gameId = params.get('id')
    const [game, setGame] = useState()
    useEffect(()=>{
        axios.get(`games/games/${gameId}`).then(res=>{
            setGame(res.data)
            console.log(game)
        }).catch(err=>{
            console.log(err.response)
        })
    },[])
    const category = [] 
    const user = JSON.parse(localStorage.getItem('user'))
    const draftStored = JSON.parse(localStorage.getItem('draft'))
    const [images, setImages] = useState([]) 
    useEffect(()=>{
    if(draftStored)setImages([...draftStored.pictures])
    if(game)setImages([...game.pictures])
    },[game])
    
    let draft = {id: localStorage.getItem('draft_id') || JSON.stringify(Math.random()*1000),}
    if(game){
        draft = {...draft,...game}
        console.log(draft)
    }
    console.log(draft)
    const addImage = (e)=>{
      if(e.key === ' ') {
        setImages([...images,e.target.value])
        e.target.value = ''
        updateDraft('pictures',images)
      }
    }
    const setCategory = (value,checked)=>{
      console.log(checked)
       if(checked)category.push(value)
       else category.splice(category.indexOf(value),1)
        updateDraft('categories', category)
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
      
          const{id,...others} = draft
          console.log({...others})
         axios.put(`/games/update/${gameId}/${user.token}`,{...others}).then(res=>{
          console.log(res.data)
          localStorage.removeItem('draft_id')
          localStorage.removeItem('draft')
          window.location.href = '/AdminDashboard/Games'
      }).catch(err=>{
        console.log(err.response)
      })
          
    }
    const removeImage = (e)=>{
     const img = e.target.parentNode.parentNode
     const imgName = img.querySelector('img').src
     const imgIndex = images.indexOf(imgName)
     images.splice(imgIndex,1)
     img.remove()
     updateDraft('pictures',images)
    }
    
    
  
    const updateDraft = (where,value)=>{
      draft[where] = value
      console.log(draft)
      localStorage.setItem('draft',JSON.stringify(draft))
      }
  
      const saveDraft = async()=>{
        if(user){
        if(!(localStorage.getItem('draft_id'))){
          try {
            console.log(user.token)
              console.log('I was tried')
              const result = await axios.post(`/games_draft/draft/${user.token}`,draft)
              console.log(result)
            } catch (err) {
              console.log(err.response)
            }
          localStorage.setItem('draft_id',draft.id)
        }else{
          try {
            const result =  await axios.put(`/games_draft/draft/${draft.id}/${user.token}`,draft)
            console.log(result)
           } catch (err) {
             console.log(err.response)
           }
          console.log(draft.id)
        }
      }
      }  
    
    return (
      <div className='admin-container games'>
        {game && <div>
          <form className='add-game-form' onSubmit={handleSubmit}>
          <label htmlFor='Name'>
            <h3>
              Enter Game Name
            </h3>
            <input type='text' onChange={(e)=>updateDraft('name',e.target.value)} placeholder='Example: Tomb Raider' defaultValue={draft? draft.name : ''} required/>
          </label>
          <label htmlFor='description'>
            <h3>Enter Game Description</h3>
            <textarea maxLength={2000} onChange={(e)=>updateDraft('description',e.target.value)} placeholder='Example: Tomb Raider...............' defaultValue={draft? draft.description :''} minLength={300}>
            </textarea>
          </label>
          <label htmlFor='Picture'>
                <div className='image-provided'>
                  {(images.length > 0) && images.map(image=>(
                    <div className='image-div' key={image}><img src={`${image}`} alt='React Gamer App'/><div className='close' ><p onClick={removeImage}>X</p></div></div>
                  ))}
                </div>
            <h3>Only Online Images are allowed. Go online and Copy Image address from online to add Image. Click on spacebar to paste image</h3>
            <input type='text' onKeyDown={addImage} placeholder='Example: https://cdn.mos.cms.futurecdn.net/HT3H8k6Fwb9aU6fjPUudK3.jpg'/>
          </label>
          <label>
            <h3>Select trending if you want game to show as trending</h3>
            <input type='radio' value={true} name='trending' onClick={(e)=>updateDraft('isTrending',e.target.value)}/>True
            <input type='radio' value={false} name='trending' onClick={(e)=>updateDraft('isTrending',e.target.value)}/>False
          </label>
          <label htmlFor='categ'>
            <h3>Choose the Game Categories or category. </h3>
            <input type='checkbox' defaultValue ='Action' onChange ={(e)=>setCategory(e.target.value,e.target.checked)} />Action
            <input type='checkbox' defaultValue ='Arcade' onChange ={(e)=>setCategory(e.target.value,e.target.checked)} />Arcade
            <input type='checkbox' defaultValue ='puzzle' onChange ={(e)=>setCategory(e.target.value,e.target.checked)} />Puzzle
            <input type='checkbox' defaultValue ='Educative' onChange ={(e)=>setCategory(e.target.value,e.target.checked)} />Educative
            <input type='checkbox' defaultValue ='Adventure' onChange ={(e)=>setCategory(e.target.value,e.target.checked)} />Adventure
          </label>
          <input type='submit'/>
          </form>
          <button className='save-draft' onClick={saveDraft}>
                Save as Draft
          </button>
        </div>}
      </div>
    )
  
}

export default EditGame
