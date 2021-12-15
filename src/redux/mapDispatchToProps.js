const mapDispatchToProps = (dispatch) => {
    return{
        setEditorValue: (value) => dispatch({ type: "SET_EDITOR_VALUE", payload: value }),
        setSizeComplete: (value) => dispatch({ type: "SET_SIZE_COMPLETE", payload: value }),
        setSizeEditorAndPreview: (sizeEditor, sizePreview) => (
            dispatch({ 
            type: "SET_SIZE_EDITOR_AND_PREVIEW", 
            valueSizeEditor: sizeEditor, 
            valueSizePreview: sizePreview 
            })
        ),
        setDisplayReverse: (value) => dispatch({ type: "SET_DISPLAY_REVERSE", payload: value }),
        setCurrentScreen: (value) => dispatch({ type: "SET_CURRENT_SCREEN", payload: value })
    }
}

export default mapDispatchToProps;