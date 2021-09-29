import React from 'react'

const StarRating = ({rating}) => {
    let stars=(rating)=> {
        let  tab= []
        for(let i=1; i<= 5;i++){
            if(i<=rating){
                tab.push(
                    <span style={{color:"pink"}}>★</span>
                )
            }else{
                tab.push(
                    <span style={{color:"black"}}>★</span>
                )
            }
        }return tab
    }
    return (
        <div>
            {
                stars(rating)
            }
        </div>
    )
}

export default StarRating
