import React from 'react'
import Header from '../Header'
import renderer from 'react-test-renderer'

test('Home page is active', () => {
  const component = renderer.create(
    <Header currentUrl='/' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('About page is active', () => {
  const component = renderer.create(
    <Header currentUrl='/about' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Awards page is active', () => {
  const component = renderer.create(
    <Header currentUrl='/awards' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Bees page is active', () => {
  const component = renderer.create(
    <Header currentUrl='/bees' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Photos page is active', () => {
  const component = renderer.create(
    <Header currentUrl='/photos' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
