import { mount } from '@vue/test-utils'
import Card from './'

describe('Component: Card', () => {

  // WHY WE MUST AVOID IMPLEMENTATION DETAIL TESTING!

  test('should mutate `favorite` state when `toggleFavorite` method is called', async () => {

    const wrapper = mount(Card, {
      propsData: {
        cardId: 1,
        title: 'my card title',
        description: 'lorem ipsum',
        image: 'test-image.jpg'
      }
    })

    // call toggleFavorite method
    await wrapper.vm.toggleFavorite()

    expect(wrapper.vm.favorite).toBe(true)

    // call toggleFavorite method again
    await wrapper.vm.toggleFavorite()

    expect(wrapper.vm.favorite).toBe(false)
  })
})

