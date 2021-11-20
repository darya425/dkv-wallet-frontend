// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { transactionOperations, transactionSelectors } from '../../Redux/transactions';

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

	// const dispatch = useDispatch();

	// const monthTransactions = useSelector(transactions.getStatistics);
	// const income = useSelector(transactions.getIncome);
	// const expenses = useSelector(transactions.getExpense);
	// const expensesTotal = expenses.reduce((a, b) => a + b, 0); 


	// useEffect(() => {
  //   dispatch(categoriesOperations.getExpensesCategories());
  // }, [dispatch]);

	// function actionCreator(payload) {
  //   return dispatch => {
  //       dispatch(action1(payload))
  //       dispatch(action2(payload))
  //   }
	// }

  

	// const getExpenses = useSelector(state =>
  //  categoriesSelectors.getExpensesCategories(state),
  // );
	

	const labels = [
    "Основные расходы",
    "Продукты",
    "Машина",
    "Забота о себе",
    "Забота о детях",
    "Товары для дома",
    "Образование",
    "Досуг",
    "Другие расходы"
  ];

	const expenses = [
		{ category: "Food", amount: 15515 },
		{ category: "Home", amount: 700 },
		{ category: "Children", amount: 560 },
		{ category: "Car", amount: 120 },
		{ category: "Pool", amount: 860 }
	];

	const expensesAmount = [8700, 2000, 1500, 800, 2208, 300, 3400, 1230, 610];
	const expensesTotal = 340;
	const incomeTotal = 100000;
	
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
							<Diagram colors={colors} expensesTotal={expensesTotal} expenses={expensesAmount}/>
						<div className={styles.calendarTable}>
							<Datepicker />
							<StatisticsTable results={results} labels={labels} />
						</div>
					</div>
        </div>
      </VisualContainer>
    </Container>
  );
}