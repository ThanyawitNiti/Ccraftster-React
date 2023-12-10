import { useState } from "react";
import { useOrderContext } from "../hooks/order-context-hook";
import Loading from "../component/Loading";

export default function OrderList({ id, total_price, history, slipImg }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { uploadSlip } = useOrderContext();

  const handdlesubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("id", id);
      formData.append("slipImg", file);
      setLoading(true);
      await uploadSlip(formData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      history();
    }
  };

  console.log(file);
  return (
    <div className="flex gap-12 py-2 ">
      <div className="font-bold ">Total Price : {total_price}</div>
      <div className="flex font-bold gap-1 w-1/4">
        <div>StatusPayment :</div>
        <div className={`${slipImg ? "text-green-500" : "text-red-500"}`}>
          {slipImg ? "รอแอดมินตรวจสอบ" : " รอการชำระเงิน "}
        </div>
      </div>
      {loading && <Loading />}
      <form className="w-10 " onSubmit={handdlesubmitForm}>
        <div className="flex flex-row gap-5 ">
          <div>
            <button className=" border-2 border-green-200 w-40 bg-green-600 rounded-lg text-white ">
              Upload Slip
            </button>
          </div>
          <div>
            <input
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
