/* eslint-disable import/prefer-default-export */
import { useEffect, useRef } from 'react';
import moment from 'moment';

export const usePrevious = value => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

export const dateFormatter = date => moment(date).format('DD/MM/YYYY');
