import React, { Component } from 'react'
import Filter from './filter'
import { style } from 'typestyle'

const filtersClass = style({
       marginTop: '10px',
       color: '#c2c2c2',
       textAlign: 'center',
       fontSize: '12px',
       maxWidth: '100%',
       width: '40%',
       fontWeight: 'bold'
})

class Filters extends Component{

       constructor(props){
               super(props)
               this.state = {
                       activeIndex: 0
               }
       }

       handleClick = (index) => {
               this.setState({
                       activeIndex: index
               })
       }

       render(){
               const filters = [
                       'Products',
                       'Systems',
                       'Anatomy',
                       'SKU'
               ]
               return(
                       <div className={`${filtersClass} columns is-mobile`} >
                               {filters.map((filter, i) =>
                                       (<Filter
                                               key={i}
                                               filter={filter}
                                               onClick={() => this.handleClick(i)}
                                               active={this.state.activeIndex === i}
                                        />)
                               )}
                       </div>
               )
       }
}

export default Filters
