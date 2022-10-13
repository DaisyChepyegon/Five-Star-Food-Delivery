class MenuSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :category, :description
end
