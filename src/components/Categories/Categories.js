import React from 'react'
import Template from './CategoryTemplate/CategoryTemplate'
import mobiles from '../../assets/images/mobiles.png'
import sports from '../../assets/images/sports.jpg'
import clothing from '../../assets/images/clothing.jpg'
import furniture from '../../assets/images/furniture.jpg'
import books from '../../assets/images/books.jpg'
import computers from '../../assets/images/computers.jpg'
import { withRouter } from 'react-router-dom'

const categories = (props) => {

    let categoryData = {
        mobile : {
            source : mobiles,
            category : "Mobiles"
        },
        sports : {
            source : sports,
            category : "Sports"
        },
        clothing : {
            source : clothing,
            category : "Clothing"
        },
        furniture : {
            source : furniture,
            category : "Furniture"
        },
        books : {
            source : books,
            category : "Books"
        },
        computers : {
            source : computers,
            category : "Computers"
        },
    }

    let categories =[];
    for(let key in categoryData){
        categories.push({
            source : categoryData[key].source,
            category : categoryData[key].category,
            id : key
        })
    }

    const categoryClicked = (category) => {
        props.history.push({
            pathname : '/products',
            search : '?category='+category
        })
    }   
    return (
        <div>
            {categories.map(cat => (
                <Template clicked={categoryClicked} key={cat.id} source={cat.source} category={cat.category} ></Template>
            ))}
        </div>
    )
}

export default withRouter(categories); 