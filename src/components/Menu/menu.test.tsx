import React from 'react'
import { fireEvent, render, RenderResult, cleanup, waitFor } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        abc
      </MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
          drop1
      </MenuItem>
      </SubMenu>
    </Menu>
  )
}

const createStyleFile = () => {
  const cssFile: string = `
    .dorae-submenu {
      display: none;
    }
    .dorae-submenu.menu-opened {
      display: block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElemet: HTMLElement, disableElement: HTMLElement;

describe('test Menu MenuItem Component', () => {
  // beforeEach在执行下面it每个任务前均执行
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    // 追加style标签
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu')
    activeElemet = wrapper.getByText('active')
    disableElement = wrapper.getByText('disabled')
  })
  it('render default props', () => {
    // 是否存在dom上
    expect(menuElement).toBeInTheDocument()
    // 是否含有类名
    expect(menuElement).toHaveClass('dorae-menu test')
    // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    // :scope css伪类表示当前元素
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElemet).toHaveClass('menu-item is-active')
    expect(disableElement).toHaveClass('menu-item is-disabled')
  })
  it('click handle', () => {
    const third = wrapper.getByText('abc')
    fireEvent.click(third)
    expect(third).toHaveClass('is-active')
    expect(activeElemet).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
  })
  it('mode test', () => {
    // 清理实例，因为上面传入的是testProps
    cleanup()
    const wrapper = render(generateMenu(testVerProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
  it('subMenu test', async () => {
    // 判断是否展示在页面视野中
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible()
    })
  })
})