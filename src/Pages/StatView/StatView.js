import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations, transactionSelectors } from '../../Redux/transactions';

import InfoBlock from '../../Components/InfoBlock';
import Navigation from '../../Components/Navigation';
import Container from '../../Components/UI/Container';
import Diagram from '../../Components/Diagram';
import Datepicker from '../../Components/Datepicker';
import StatisticsTable from '../../Components/StatisticsTable/StatisticsTable';
import VisualContainer from '../../Components/VisualContainer';

import styles from './statView.module.scss';
import {colors} from './colors';

export default function StatView() {
	const [startDay, setStartDay] = useState('');
	const [endDay, setEndDay] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionCreator());
  }, [startDay, endDay]);

	function actionCreator() {
    return dispatch => {
			dispatch(transactionOperations.getExpenseTransactions({
				startDate: startDay, // yyyy-mm-dd
				endDate: endDay, // yyyy-mm-dd
			}));
			dispatch(transactionOperations.getIncomeTransactions({
				startDate: startDay, // yyyy-mm-dd
				endDate: endDay, // yyyy-mm-dd
			}));
    }
	}

	const incomeAll = useSelector(transactionSelectors.getIncomeTransactions);
	const expensesAll = useSelector(transactionSelectors.getExpenseTransactions);

	const incomeTotal = incomeAll.reduce((prev, { amount }) => {
			return prev + amount
	}, 0)

	const expensesTotal = expensesAll.reduce((prev, { amount }) => {
		return prev + amount
	}, 0)


	const expenses = expensesAll.reduce((acc, {category, amount}) => {
			const objInAcc = acc.find(elem => elem.category === category);
			if (objInAcc) objInAcc.amount += amount;
			else acc.push({category, amount});
			return acc;
	}, []);

	const expensesAmount = expenses.map(obj => {return obj.amount});
	const labels = expenses.map(obj => {return obj.category});

	const allExpenses = expenses.map((expense, index) => {
		return {
			category: expense.category,
			amount: expense.amount,
			color: colors[index]
		};
	});
	
	const costs = { category: "Expenses", amount: expensesTotal };
	const income = { category: "Income", amount: incomeTotal };
	const results = [...allExpenses, costs, income];

	const handleDateChange = (first, last) => {
		setStartDay(first);
		setEndDay(last);
	}

  return (
    <Container>
      <VisualContainer>
				<div className={styles.wrapDesktop}>
      <div className={styles.hiddenNav}>
        <Navigation />
			</div>
      <div className={styles.hiddenInfo}>
        <InfoBlock />
			</div>   
				<div className={styles.wrapContainer}>
							<Diagram colors={colors} expensesTotal={expensesTotal} expenses={expensesAmount} labels={labels}/>
						<div className={styles.calendarTable}>
							<Datepicker dateChange={handleDateChange}/>
							<StatisticsTable results={results}  />
						</div>
					</div> 
        </div>
      </VisualContainer>
    </Container>
  );
}