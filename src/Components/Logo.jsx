import logo from '../media/images/dt_logo.svg'

const Logo = () => {
	// let animationContainer = useRef(null)
	// useEffect(() => {
	// 	lottie.loadAnimation({
	// 		container: animationContainer.current,
	// 		renderer: 'svg',
	// 		loop: false,
	// 		autoplay: true,
	// 		animationData: animation,
	// 	})
	// }, [])

	return (
		<img src={logo} id="dt-anim" alt="DT logo" />
	)
}

export default Logo
