import { mount } from '@vue/test-utils'
import Card from './'

describe('Component: Card', () => {

  test('should render an image based on props', () => {
    const wrapper = mount(Card, {
      propsData: {
        cardId: 1,
        title: 'my card title',
        description: 'lorem ipsum',
        image: 'test-image.jpg'
      }
    })

    const image = wrapper.findComponent({ ref:  'card-image' })

    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toContain('test-image.jpg')
  })

  test('should render title based on props', () => {
    const wrapper = mount(Card, {
      propsData: {
        cardId: 1,
        title: 'my card title',
        description: 'lorem ipsum',
        image: 'test-image.jpg'
      }
    })

    const title = wrapper.findComponent({ ref: 'card-title' })
    expect(title.text()).toMatch(/my card title/i)
  })

  test('should render description based on props', () => {
    const wrapper = mount(Card, {
      propsData: {
        cardId: 1,
        title: 'my card title',
        description: 'lorem ipsum',
        image: 'test-image.jpg'
      }
    })

    const description = wrapper.findComponent({ ref: 'card-description' })
    expect(description.text()).toMatch(/lorem ipsum/i)
  })

  test('should change button label and color when button is clicked', async () => {
    const wrapper = mount(Card, {
      propsData: {
        cardId: 1,
        title: 'my card title',
        description: 'lorem ipsum',
        image: 'test-image.jpg'
      }
    })

    const button = wrapper.findComponent({ ref: 'card-button' })

    expect(button.text()).toMatch(/add to favorite/i)

    // click button
    await button.trigger('click')

    // should be change label now
    expect(button.text()).toMatch(/remove from favorite/i)

    // should be change color now
    expect(button.classes()).toContain('card__button--favorite')
  })

  test('should emit an event when favorite button is clicked', async () => {
    const wrapper = mount(Card, {
      propsData: {
        cardId: 1,
        title: 'my card title',
        description: 'lorem ipsum',
        image: 'test-image.jpg'
      }
    })

    const button = wrapper.findComponent({ ref: 'card-button' })

    await button.trigger('click')

    expect(wrapper.emitted().favorite).toBeTruthy()
    expect(wrapper.emitted().favorite[0]).toEqual([1])
  })

})

