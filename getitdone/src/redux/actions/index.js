export const toggleDrawer = () => ({
	type: 'OPENED_DRAWER'
});

export const toggleSignInUp = currentActiveTab => ({
	type: 'CHANGED_TAB',
    currentActiveTab
});

export const toggleLogin = () => ({
	type: 'CHANGED_LOGIN'
});

export const openDialog = () => ({
	type: 'OPENED_DIALOG'
});

export const closeDialog = () => ({
	type: 'CLOSED_DIALOG'
});