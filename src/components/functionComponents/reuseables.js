import axios from "axios";



export const Delete = async(url,id,token)=>{
  axios.delete(`${url}/${id}/${token}`).then(()=>{
    window.location.reload()
  }).catch(()=>{
    console.log('An Error Occured.')
  })
}

export const onLike = async(gameId,userId)=>{
      axios.put(`/games/updateLikes/${gameId}/${userId}`).then(()=>{
        window.location.reload()
      }).catch(err=>{
        return err.response
      })
}

export const unLike = async(gameId,userId)=>{
  axios.delete(`/games/unlike/${gameId}/${userId}`).then(()=>{
    window.location.reload()
  }).catch(err=>{
    return err.response
  })
}