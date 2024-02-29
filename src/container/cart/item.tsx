import { CartListItemType } from "./slice";

type CartItemType = CartListItemType & {
	onRemove: () => void;
	onAmountChange: (newAmount: number) => void;
};

export const CartItem: React.FC<CartItemType> = ({
	id,
	title,
	amount,
	onAmountChange,
	onRemove,
}) => {
	return (
		<div className="cart-item">
			<div className="cart-item__title">
				(id{id}) {title}
			</div>

			<div className="cart-item__block">
				<div className="cart-item__block">
					<button onClick={() => onAmountChange(amount - 1)}>-</button>
					{amount}
					<button onClick={() => onAmountChange(amount + 1)}>+</button>

					<button onClick={() => onRemove()}>X</button>
				</div>
			</div>
		</div>
	);
};