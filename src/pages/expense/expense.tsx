import React,{Component} from 'react';
import ExpenseCell from '../../components/expense/expenseCell';
import Header from '../../components/header';
import './expense.css';

/**
 * 注册的消费记录页面组件
 */
export default class Expense extends Component{
    render(){
        return (
            <div>
                <Header index={1} />
                <ExpensePanel/>
            </div>
        );
    }
}


/**
 * 消费记录组件
 */class ExpensePanel extends Component{ 

    /**
     * 获取假的消费记录数据
     */
    getFakeExpenseList(){
        const expenseList=[
            {
                "name":"测试订单一",
                "time":new Date().toLocaleString(),
                "status":"已支付",
                "price":100,
            },
            {
                "name":"测试订单二",
                "time":new Date().toLocaleString(),
                "status":"已支付",
                "price":100,
            },
        ];
        return expenseList;
    }
    componentDidMount(){
        //TODO:向后端请求消费记录数据
    }
    render(){
        const expenseList=this.getFakeExpenseList();
        const expenseListElement=expenseList.map(
            (expense,index)=>
                <ExpenseCell
                    key={index}
                    expense={expense}
                />
        );
        return (
            <div className='expense-panel'>
                <div className='expense-cell expense-title'>
                    <span>消费时间</span>
                    <span>订单名称</span>
                    <span>订单状态</span>
                    <span>订单金额</span>
                </div>
                {expenseListElement}
            </div>
        );
    }
}