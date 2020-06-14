export const calculateLineTotalAmount = (index, invoiceItems) => {
	const items = [...invoiceItems];
	items[index].amount = items[index].qty * items[index].rate;

	return items;
};

export const calculateTotalInvoiceAmount = invoiceItems => {
	return invoiceItems.reduce((sum, item) => sum + item.amount, 0);
};
