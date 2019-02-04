import React, { Fragment } from 'react';
import { Tree, Input, Icon } from 'antd';
import remove from 'lodash/remove';
import classNames from 'classnames';

const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

const clsPrefix = 'cap-sidebar';

export class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        }
    }

    handleSearch = (e) => {
        const value = e.target.value;
        this.setState({ searchText: value });
    }

    clearSearch = (e) => {
        this.setState({ searchText: "" });
    }

    getTreeNodes = (data) => {
        const { selectedMenuItem } = this.props;

        return data.map((item) => {
            const title = <span>{item.title}</span>;
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={title} className={classNames(`${clsPrefix}-tree-node parent-node`)}>
                        {this.getTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode
                className={classNames(`${clsPrefix}-tree-node leaf-node`, { selected: selectedMenuItem === item.key })}
                key={item.key}
                title={<a href={item.link}>{item.title}</a>}
                isLeaf
            />;
        });
    }

    onSelect = (selectedKeys, e) => {
        const key = e.node.props.eventKey;
        if (e.node.props.isLeaf) {
            this.props.onMenuItemClick(key)
        };
    };

    render() {
        const { sidebarItems } = this.props;
        const { searchText } = this.state;
        return (
            <div className={classNames(`${clsPrefix}`)}>
                <div className={classNames(`${clsPrefix}-search`)}>
                    <Input
                        placeholder="Search"
                        onChange={this.handleSearch}
                        value={searchText}
                    />
                    <Icon type="search" />
                    <Icon onClick={this.clearSearch} type="close" />
                </div>
                <DirectoryTree
                    className={classNames(`${clsPrefix}-tree`)}
                    multiple
                    defaultExpandAll
                    onSelect={this.onSelect}
                >
                    {this.getTreeNodes(sidebarItems)}
                </DirectoryTree>
            </div>
        )
    }
}
