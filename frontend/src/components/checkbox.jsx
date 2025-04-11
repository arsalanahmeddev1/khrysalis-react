const Checkbox = ({title, id, value, onChange}) =>   <label className="text-white-false flex gap-x-2 w-1/2"><input className="" onChange={onChange} type="checkbox" name="" id={id} value={value}/>{title}</label>

export default Checkbox