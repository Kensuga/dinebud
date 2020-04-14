# == Schema Information
#
# Tabel name: places

# id :integer
# name:string
# address:string
# latitude:float
# longitude:float
# created_at:datetime
# updated_at:datetime


class Place < ApplicationRecord
    geocoded_by :address
    after_validation :geocode, if :address_changed?
end
