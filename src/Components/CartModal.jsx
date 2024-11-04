import image from '../assets/Group.png'
const CartModal = () => {
    return (
        <div>
            <dialog  className="modal modal-middle">
                <div className="modal-box">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <h3 className="font-bold text-2xl font-sora">Payment Successfully!</h3>
                    <p className="py-4">Thanks for purchasing.</p>
                    <p>Total:</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CartModal;