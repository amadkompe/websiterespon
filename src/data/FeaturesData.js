import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Keamanan Terbaik',
		description: 'Kami menawarkan keamanan data terbaik untuk klien kami, yang membuat kami menonjol',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Kemudahan penggunaan',
		description: 'Sistem kami mudah digunakan dan diintegrasikan',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Pemeliharaan',
		description: 'Kode kami ditulis dalam standar tertinggi, yang membuatnya sangat berkelanjutan',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Dukungan 24/7',
		description: 'Tim kami tersedia setiap saat jika Anda membutuhkan kami',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Harga',
		description: 'Kami menawarkan rasio nilai/biaya tertinggi',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Dapat diskalakan',
		description:
			'Server kami berlokasi di seluruh dunia, sehingga meningkatkan skalabilitas dan kecepatan ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
