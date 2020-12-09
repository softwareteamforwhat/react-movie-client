import React from 'react';
import './expenseCell.css';
/**
 * 消费记录单元格
 */
export default class ExpenseCell extends React.Component<any,any>{
    
    render(){
        return (
            <div className='expense-cell'>
                <span className='info-cell'>{this.props.expense.time}</span>
                <span className='info-cell'>{this.props.expense.name}</span>
                <span className='info-cell'>{this.props.expense.price}</span>
                <span className='info-cell'>{this.props.expense.status}</span>
            </div>
        );
    }
}