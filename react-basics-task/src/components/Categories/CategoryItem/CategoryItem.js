
import React from 'react';
import {IconButton, Paper} from "material-ui";
import {
    EditorModeEdit,
    ActionDeleteForever,
    ContentAddBox,
    NavigationExpandMore,
    NavigationChevronRight,
    ContentReply
} from "material-ui/svg-icons/index";


import './CategoryItem.css'
import {connect} from "react-redux";
import {activateCategory} from "../../../core/categories";
import {selectCategory} from "../../../state";
import {categoryDelete, getTodoList, isCategorySelected, isNotChildrenTreeEmpty} from "../../../core";
import AddInputStringDialog from "../../common/AddInputStringDialog/AddInputStringDialog";

class CategoryItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            toDo:'Enter category title',
            isChildrenCollapsed: true,
            addEditDialog: false,
            editEntity: null,
        };

        this.expandCategory = this.expandCategory.bind(this);
        this.openAddDialog = this.openAddDialog.bind(this);
        this.openEditDialog = this.openEditDialog.bind(this);
        this.activateCategory = this.activateCategory.bind(this);
    }



    activateCategory(e){
        e.stopPropagation();
        this.props.activateCategory(this.props.categoryId);
        const payload = {categoryId:this.props.categoryId};
          this.props.selectCategory(payload);
    }

    expandCategory(e) {
        e.stopPropagation();
        if (this.props.ChildrenTree != false) {
            this.setState(
                {
                    isChildrenCollapsed: !this.state.isChildrenCollapsed
                }
            )
        }
    }


    openEditDialog(e) {
        if(e){ e.stopPropagation();}
        this.setState({
            addEditDialog: !this.state.addEditDialog,
            editEntity:this.state.editEntity ? null :  this.props.categoryTitle
        })
    }

    openAddDialog(e) {
       if(e){ e.stopPropagation();}
        this.setState({
            addEditDialog: !this.state.addEditDialog,
            editEntity: null
        })
    }




    render(){
        let {categoryTitle,serviceActions, parentId} = this.props;
        // console.log( this.props.ChildrenTree);

        let childrenT = serviceActions.createCategoryTree(serviceActions,this.props.ChildrenTree, this.props.categoryId);
        let toggleEvents = {
            openEditDialog: this.openEditDialog,
            openAddDialog: this.openAddDialog,
        };


        return (
            <div className="category" className={"category-item" + (this.props.selectedCategory ? 'active' : "")} onClick={this.activateCategory} >
                <Paper className="paper" zDepth={2} children={
                    <div className="main">
                        <div className="expand">
                            {this.props.ChildrenTree != false?
                                <IconButton>
                                    {this.state.isChildrenCollapsed?
                                        <NavigationChevronRight onClick={this.expandCategory}/> :
                                        <NavigationExpandMore onClick={this.expandCategory}/>}
                                </IconButton> : ""}
                        </div>
                        <div className="title">
                            {categoryTitle}
                        </div>
                            <div className="actions">
                                <div className="edit">
                                    <IconButton>
                                        <EditorModeEdit onClick={this.openEditDialog}/>
                                    </IconButton>
                                </div>
                                <div className="remove">
                                    <IconButton>
                                        <ActionDeleteForever onClick={(event) => {
                                            this.props.categoryDelete(this.props.categoryId,parentId);
                                            event.stopPropagation();
                                        }}/>
                                    </IconButton>
                                </div>
                                <div className="add">
                                    <IconButton>
                                        <ContentAddBox onClick={this.openAddDialog}/>
                                    </IconButton>
                                </div>
                            </div>

                    </div>
                }/>
                <div className={(this.props.ChildrenTree != false ? 'children ' : '') + (this.state.isChildrenCollapsed ? 'collapsed' : '')}>
                    {childrenT}
                </div>
                <AddInputStringDialog
                    editEntity={this.state.editEntity}
                    parentId={this.props.categoryId}
                    isOpened={this.state.addEditDialog}
                    toggleEvents={toggleEvents}
                    // addEvent={serviceActions.addCategoryTitle}
                />
            </div>

        )

    }
}

const mapDispatchToProps = ({
    activateCategory,
    selectCategory,
    categoryDelete
});

const mapStateToProps =(state,props)=> {

    return {selectedCategory: isCategorySelected(state,props.categoryId),
            ChildrenTree : isNotChildrenTreeEmpty(state,props.categoryId,props.parentId)

}};



export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem);

