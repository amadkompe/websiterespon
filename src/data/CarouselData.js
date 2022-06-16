export const data = [
	{
		title: 'Apa yang dikatakan klien kami',
		description:
			'Klien kami dengan senang hati tinggal dengan layanan kami selama beberapa tahun sekarang. Lihat ulasan nyata dari klien kami.',
		image: './assets/clients.jpg',
	},
	{
		title: 'Keamanan kami ',
		description: 'Pelajari lebih lanjut tentang sistem keamanan kami untuk memastikan data Anda selalu aman',
		image: './assets/security.jpg',
	},
	{
		title: 'Tim kita',
		description: 'Tim kami terdiri dari para ahli terbaik di industri ini, pelajari tentang mereka',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'Server kami',
		description: 'Temukan lebih lanjut tentang perangkat keras dan perangkat lunak yang digunakan untuk layanan Anda',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	},
	{
		title: 'Klien teratas kami',
		description: 'Kami telah menyediakan layanan kepada klien teratas di industri teknologi',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
