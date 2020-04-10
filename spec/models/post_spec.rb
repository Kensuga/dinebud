require 'rails_helper'

RSpec.describe Post, type: :model do
  require 'rails_helper'

  it 'routes to #index' do
   expect(get: '/posts').to route_to('posts#index')
  end

  it 'routes to #show' do
   expect(get: '/posts/1').to route_to('posts#show', id: '1')
  end

  it 'routes to #new' do
   expect(get: '/posts/new').to route_to('posts#new')
  end
 
  it 'routes to #update via PUT' do
   expect(put: '/posts/1').to route_to('posts#update', id: '1')
  end
  
  it 'routes to #update via PATCH' do
   expect(patch: '/posts/1').to route_to('posts#update', id: '1')
  end
end
