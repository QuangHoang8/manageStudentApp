import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const SearchStudent = () => {
  return (
    <div>
      <input placeholder="Tìm kiếm"></input>
      <Tooltip title="search">
        <Button type="primary" shape="rectangle" icon={<SearchOutlined />} />
      </Tooltip>
    </div>
  );
};
