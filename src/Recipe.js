import React from 'react';
import style from './Recipe.module.css';
// import $ from 'jquery';

const Recipe = ({title,calories,image,link,ingredients,nutrients}) =>{
    return(
        <div className ={style.card}>
            <h1 className={style.title}>{title}</h1>
            {/* <span className={style.delete} onClick={this.hide_overlay}><p>X</p></span> */}
            <div className={style.section1}>
                <div className={style.blok1}>
                    <img className={style.image} src={image} alt=""/>
                    <a href={link} className={style.instruction}>Instruction</a>
                </div>
                <div className={style.blok2}>
                    <ol className={style.ingredients} type="disc">
                        <h3>Ingredients</h3>
                        {ingredients.map(item =>(
                            <li>{item.text}</li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className={style.section2}>
                <button className={style.btn} onClick= {(e)=>{
                        if(e.target.nextSibling.style.display === 'none'){
                            e.target.nextSibling.style.display = 'block'
                        }else{
                            e.target.nextSibling.style.display = 'none'
                        }
                    }}>
                    Nutrients</button>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   Object.keys(nutrients).map(keys=>(
                                <tr>
                                    <td className={style.tabletdcol1}>{nutrients[keys].label}</td>    
                                    <td>{Math.round(nutrients[keys].quantity)}</td>
                                    <td>{nutrients[keys].unit}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Recipe;