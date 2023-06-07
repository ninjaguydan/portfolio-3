const MenuBtn = ({menuToggle, isActive}) => {
	return (
		<button id="menu-btn" className={ isActive ? "menu-btn" : "menu-btn open" } tabindex="1" onClick={() => menuToggle()}>
			<div className="menu-btn_burger"></div>
		</button>
	)
}

export default MenuBtn
