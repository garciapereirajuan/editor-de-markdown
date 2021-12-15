const mapStateToProps = (state) => {
    return {
        editorValue: state.editorValue,
        sizeComplete: state.sizeComplete,
        sizeEditor: state.sizeEditor,
        sizePreview: state.sizePreview,
        displayReverse: state.displayReverse,
        currentScreen: state.currentScreen
    }
}

export default mapStateToProps;