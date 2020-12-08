import React from 'react';
import './expenseCell.css';
/**
 * 消费记录单元格
 */
export default class ExpenseCell extends React.Component<any,any>{
    
    render(){
        return (
            <div className='expense-cell'>
                <span>{this.props.expense.time}</span>
                <span>{this.props.expense.name}</span>
                <span>{this.props.expense.price}</span>
                <span>{this.props.expense.status}</span>
            </div>
        );
    }
}