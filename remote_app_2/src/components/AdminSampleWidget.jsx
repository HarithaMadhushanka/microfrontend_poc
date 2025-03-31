import React from "react";

const AdminSampleWidget = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md text-black">
      <h3 className="text-lg font-bold mb-2">Admin Sample Widget</h3>
      <p>
        This is a remote widget from <strong>remote_app_2</strong>. This widget
        is only shown to the admin.
      </p>
    </div>
  );
};

export default AdminSampleWidget;
