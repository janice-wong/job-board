class RenameTypeColumnInJobs < ActiveRecord::Migration[5.1]
  def change
    rename_column :jobs, :type, :jobtype
  end
end
