<?php
class Role extends Model implements JsonSerializable{
	public $id;
	public $name;
	public $updated_at;
	public $created_at;

	public function __construct(){
	}
	public function set($id,$name,$updated_at,$created_at){
		$this->id=$id;
		$this->name=$name;
		$this->updated_at=$updated_at;
		$this->created_at=$created_at;

	}
	public function save(){
		global $db,$tx;
		$db->query("insert into {$tx}roles(name,updated_at,created_at)values('$this->name','$this->updated_at','$this->created_at')");
		return $db->insert_id;
	}
	public function update(){
		global $db,$tx;
		$db->query("update {$tx}roles set name='$this->name',updated_at='$this->updated_at',created_at='$this->created_at' where id='$this->id'");
	}
	public static function delete($id){
		global $db,$tx;
		$db->query("delete from {$tx}roles where id={$id}");
	}
	public function jsonSerialize():mixed{
		return get_object_vars($this);
	}
	public static function all(){
		global $db,$tx;
		$result=$db->query("select id,name,updated_at,created_at from {$tx}roles");
		$data=[];
		while($role=$result->fetch_object()){
			$data[]=$role;
		}
			return $data;
	}
	public static function pagination($page=1,$perpage=10,$criteria=""){
		global $db,$tx;
		$top=($page-1)*$perpage;
		$result=$db->query("select id,name,updated_at,created_at from {$tx}roles $criteria limit $top,$perpage");
		$data=[];
		while($role=$result->fetch_object()){
			$data[]=$role;
		}
			return $data;
	}
	public static function count($criteria=""){
		global $db,$tx;
		$result =$db->query("select count(*) from {$tx}roles $criteria");
		list($count)=$result->fetch_row();
			return $count;
	}
	public static function find($id){
		global $db,$tx;
		$result =$db->query("select id,name,updated_at,created_at from {$tx}roles where id='$id'");
		$role=$result->fetch_object();
			return $role;
	}
	static function get_last_id(){
		global $db,$tx;
		$result =$db->query("select max(id) last_id from {$tx}roles");
		$role =$result->fetch_object();
		return $role->last_id;
	}
	public function json(){
		return json_encode($this);
	}
	public function __toString(){
		return "		Id:$this->id<br> 
		Name:$this->name<br> 
		Updated At:$this->updated_at<br> 
		Created At:$this->created_at<br> 
";
	}

	//-------------HTML----------//

	static function html_select($name="cmbRole"){
		global $db,$tx;
		$html="<select id='$name' name='$name'> ";
		$result =$db->query("select id,name from {$tx}roles");
		while($role=$result->fetch_object()){
			$html.="<option value ='$role->id'>$role->name</option>";
		}
		$html.="</select>";
		return $html;
	}
	static function html_table($page = 1,$perpage = 10,$criteria="",$action=true){
		global $db,$tx,$base_url;
		$count_result =$db->query("select count(*) total from {$tx}roles $criteria ");
		list($total_rows)=$count_result->fetch_row();
		$total_pages = ceil($total_rows /$perpage);
		$top = ($page - 1)*$perpage;
		$result=$db->query("select id,name,updated_at,created_at from {$tx}roles $criteria limit $top,$perpage");
		$html="<table class='table'>";
			$html.="<tr><th colspan='3'>".Html::link(["class"=>"btn btn-success","route"=>"role/create","text"=>"New Role"])."</th></tr>";
		if($action){
			$html.="<tr><th>Id</th><th>Name</th><th>Updated At</th><th>Created At</th><th>Action</th></tr>";
		}else{
			$html.="<tr><th>Id</th><th>Name</th><th>Updated At</th><th>Created At</th></tr>";
		}
		while($role=$result->fetch_object()){
			$action_buttons = "";
			if($action){
				$action_buttons = "<td><div class='btn-group' style='display:flex;'>";
				$action_buttons.= Event::button(["name"=>"show", "value"=>"Show", "class"=>"btn btn-info", "route"=>"role/show/$role->id"]);
				$action_buttons.= Event::button(["name"=>"edit", "value"=>"Edit", "class"=>"btn btn-primary", "route"=>"role/edit/$role->id"]);
				$action_buttons.= Event::button(["name"=>"delete", "value"=>"Delete", "class"=>"btn btn-danger", "route"=>"role/confirm/$role->id"]);
				$action_buttons.= "</div></td>";
			}
			$html.="<tr><td>$role->id</td><td>$role->name</td><td>$role->updated_at</td><td>$role->created_at</td> $action_buttons</tr>";
		}
		$html.="</table>";
		$html.= pagination($page,$total_pages);
		return $html;
	}
	static function html_row_details($id){
		global $db,$tx,$base_url;
		$result =$db->query("select id,name,updated_at,created_at from {$tx}roles where id={$id}");
		$role=$result->fetch_object();
		$html="<table class='table'>";
		$html.="<tr><th colspan=\"2\">Role Show</th></tr>";
		$html.="<tr><th>Id</th><td>$role->id</td></tr>";
		$html.="<tr><th>Name</th><td>$role->name</td></tr>";
		$html.="<tr><th>Updated At</th><td>$role->updated_at</td></tr>";
		$html.="<tr><th>Created At</th><td>$role->created_at</td></tr>";

		$html.="</table>";
		return $html;
	}
}
?>
