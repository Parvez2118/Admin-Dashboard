import React, { useEffect, useState } from "react";

// import Select from "react-select";

const CreateModal = (props) => {
  const { showModal, setShowModal, dataHandler } = props;
  const typeoptions = [
    {
      value: "one-time",
      label: "One Time Apply",
    },
    { value: "assign-limit", label: "Assign Limits" },
    { value: "first-limited-user", label: "First Limited User" },
  ];
  const discountOptions = [
    { value: "percentage", label: "Percentage" },
    { value: "Number", label: "Number" },
  ];
   const[bool,setbool]=useState(true);
   const[bool1,setbool1]=useState(false);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [post, setpost] = useState("");
  const [insta, setInsta] = useState("");
  const [you, setYou] = useState("");

  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [feature, setFeature] = useState("");
  const [tax, setTax] = useState("");
  const [TotalAmount, setTotalAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  // const [inputText, setInputText] = useState('');
  // const [listItems, setListItems] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const obj = {
      name,
      email,
      post,
      insta,
      you
    };
    console.log("fjsdgfhgsdhfgjhdsgfjhsdgjhfsdgjhfgjhgfgjsdggfjgsdgjgjh");
    console.log(obj);
    dataHandler(obj);
    setName("");
    setAmount("");
    setPeriod("");
    setDescription("");
    setFeature("");
    setTax("");
    // setListItems([]);
    setTotalAmount("");
    setSelectedOption('');
    setShowModal(false);
  };

  const toggle=()=>{
    setbool(false);
    setbool1(true);
  }
  const untoggle=()=>{
    setbool(true);
    setbool1(false);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <>
      <div className="modal1-wrapper1">
        <div className="modal1-content1">
          <h3 className="text1-wrapper1-modal1">Add New Profile</h3>
          <div className="basicContact">
          <div className={`basicContactprop ${bool?"b":""}`}>Basic</div>
          <div className={`basicContactprop ${bool1?"c":""}`}>Contact</div>
          </div>
          
        {
          bool&&
          <div className="basic">
          <div className="content1-wrapper1-2">
            <h5 className="modal1-type1-name1"> Enter Name *</h5>
            <input
              type="text"
              className="modal1-type1"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

          </div>

          <div className="content1-wrapper1-2">
            <h5 className="modal1-type1-name1">Enter Email *</h5>
            <input
              type="email"
              className="modal1-type1"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />

          </div>

          <div className="content1-wrapper1-2">
            <h5 className="modal1-type1-name1">Enter Phone *</h5>
            <input
              type="text"
              className="modal1-type1"
              placeholder="Phone"
              onChange={(e) => {
                setpost(e.target.value);
              }}
            />

          </div>
          
          <div className="modal1-buttons1">
          <button className="modal1-create1" onClick={toggle}>
              Next
            </button>
            </div>
         
          </div>
        }
       

          {
            bool1&&
            <div className="basic">
            <div className="content1-wrapper1-2">
              <h5 className="modal1-type1-name1">Instagram Link (Optional)</h5>
              <input
                type="text"
                className="modal1-type1"
                placeholder="Eg. ..instagram.com/username"
                onChange={(e) => {
                  setInsta(e.target.value);
                }}
              />
  
            </div>
  
            <div className="content1-wrapper1-2">
              <h5 className="modal1-type1-name1">Youtube Link (Optional)</h5>
              <input
                type="text"
                className="modal1-type1"
                placeholder="Eg. ..youtebe/username"
                onChange={(e) => {
                  setYou(e.target.value);
                }}
              />
  
            </div>

            <div className="modal1-buttons1">
              <button className="modal1-create1" onClick={untoggle}>Back</button>
            <button className="modal1-create1" onClick={submitHandler}>
              Done
            </button>
            {/* <button
              className="modal1-cancel1"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </button> */}
          </div>
           
            </div>
          }


         
        </div>
      </div>
    </>
  );
};

export default CreateModal;
