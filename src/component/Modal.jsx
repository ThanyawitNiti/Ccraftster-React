export default function Modal({ title, open, onClose, children,maxWidth }) {
  return (
    <>
      {open && (
        <>
           <div className="fixed inset-0 bg-green-50 opacity-70 z-20"> </div>
          <div className="fixed inset-0 z-30">
            <div className="flex justify-center items-center min-h-full p-4">

              <div
                className="rounded-lg w-1/4 bg-green-50 shadow-2xl border-2 border-yellow-600"
                style={{ maxWidth: `${maxWidth}rem` }} >
                
                <div className="flex justify-between p-4 text-xl border-b">
                  <div className="invisible">X</div>
                  <div className="font-bold">{title}</div>
                  <div className="text-red-500 cursor-pointer"
                        onClick={onClose}>Close</div>
                </div>


                <div className="p-4">{children}</div>

              </div>


            </div>
          </div>
        </>
      )}
    </>
  );
}
