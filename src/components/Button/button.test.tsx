import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
  onClick: jest.fn()
}
const testProps: ButtonProps = {
  btnType: "primary",
  size: "lg",
  className: 'kiss'
}
const disableProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it("should render the correct default button", () => {
    // 添加一个元素
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    // 获取dom元素
    const element = wrapper.getByText('Nice')
    // 判断是否在window上
    expect(element).toBeInTheDocument()
    // 是否元素属性相同
    expect(element.tagName).toEqual('BUTTON')
    // 是否含有类名
    expect(element).toHaveClass('btn')
    // 模拟点击
    fireEvent.click(element)
    // 事件是否被调用
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it("should render the correct component base on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg kiss')
  })

  it("should render a link when btnType equals link and href is provide", () => {
    const wrapper = render(<Button btnType="link" href="http://www.baidu.com">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it("should render a disable button when disable set to true", () => {
    const wrapper = render(<Button {...disableProps}>Nice</Button>)
    // 断言为一个button按钮属性，默认为普通元素，无disabled属性
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    expect(element.tagName).toEqual('BUTTON')
    fireEvent.click(element)
    expect(disableProps.onClick).not.toHaveBeenCalled()
  })
})