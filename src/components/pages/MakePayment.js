import GeneratePrn from "../GeneratePrn";
import Payment from "../Payment";

const MakePayment = () => {
  const payments = [
    {
      id: 1,
      prn: "1674683920846378292",
      amount: 300000,
      reason: "Functional Fees",
      date: "03/04/2023",
    },
    {
      id: 2,
      prn: "1674683920846378292",
      amount: 200000,
      reason: "Tuition",
      date: "15/03/2023",
    },
    {
      id: 3,
      prn: "1674683920846378292",
      amount: 300000,
      reason: "Functional Fees",
      date: "03/01/2023",
    },
  ];
  return (
    <div className="package">
      <div className="payments">
        <div className="history">
          <span style={{ color: "white", textDecoration: "underline" }}>
            Payment history
          </span>
          {payments.map((payment) => (
            <Payment
              key={payment.id}
              id={payment.id}
              prn={payment.prn}
              amount={payment.amount}
              reason={payment.reason}
              date={payment.date}
            />
          ))}
        </div>
      </div>

      <form className="generate-prn">
        <GeneratePrn />
      </form>
    </div>
  );
};

export default MakePayment;
